<template>
  <div class="p-user-groups">
    <header class="m-box m-aln-center m-pos-f m-head-top m-main m-bb1">
      <div class="m-box m-aln-center m-flex-grow1 m-flex-shrink1 m-flex-base0">
        <svg class="m-style-svg m-svg-def" @click="goBack">
          <use xlink:href="#base-back"/>
        </svg>
      </div>
      <div class="m-box m-aln-center m-justify-center m-flex-grow1 m-flex-shrink1 m-head-title">
        <span>{{ title }}</span>
      </div>
      <div class="m-box m-aln-center m-flex-grow1 m-flex-shrink1 m-flex-base0"/>
    </header>
    <main style="padding-top: 0.9rem">
      <load-more
        ref="loadmore"
        :on-refresh="onRefresh"
        :on-load-more="onLoadMore">
        <ul>
          <li
            v-for="group in groups"
            :key="group.id"
            class="m-bb1">
            <group-item :group="group"/>
          </li>
        </ul>
      </load-more>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GroupItem from "./components/GroupItem.vue";
import { getGroupsByUser } from "@/api/group.js";
export default {
  name: "UserGroups",
  components: {
    GroupItem
  },
  data() {
    const GROUPS = new Map();
    return {
      preUID: 0,
      GROUPS,
      groupsChangeTracker: 1
    };
  },
  computed: {
    ...mapState(["CURRENTUSER"]),
    userID() {
      return ~~this.$route.params.userID;
    },
    title() {
      if (this.CURRENTUSER.id === this.userID) return "我加入的";
      return "TA的圈子";
    },
    groups() {
      return this.groupsChangeTracker && Array.from(this.GROUPS.values());
    }
  },
  created() {
    document.title = this.title;
  },
  activated() {
    if (this.preUID !== this.userID) {
      this.GROUPS.clear();
      this.groupsChangeTracker = 1;
      this.preUID = this.userID;
    }
    this.$refs.loadmore.beforeRefresh();
  },
  methods: {
    formateGroups(groups) {
      groups.forEach(group => {
        this.GROUPS.set(group.id, group);
        this.groupsChangeTracker += 1;
      });
    },
    onRefresh() {
      getGroupsByUser(this.userID, 15).then(({ data = [] }) => {
        this.formateGroups(data);
        this.$refs.loadmore.topEnd(!(data.length < 15));
      });
    },
    onLoadMore() {
      getGroupsByUser(this.userID, 15, this.groups.length).then(
        ({ data = [] }) => {
          this.formateGroups(data);
          this.$refs.loadmore.bottomEnd(data.length < 15);
        }
      );
    }
  }
};
</script>
