<template>
  <div id="parentx">
    <vs-button @click="active = !active" color="dark" type="filled"
      >Open Sidebar</vs-button
    >
    <vs-sidebar
      parent="body"
      default-index="1"
      color="dark"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div class="header-sidebar" slot="header">
        <h4>
          Ticker-display
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>
      </div>

      <vs-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">
        History
      </vs-sidebar-item>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="3" icon="verified_user">
        Configurations
      </vs-sidebar-item>
      <vs-sidebar-item index="4" icon="account_box">
        Profile
      </vs-sidebar-item>
      <vs-sidebar-item index="5">
        Card
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-checkbox
          @change="toggleEdit"
          icon="settings"
          color="success"
          v-model="editMode"
          >Edit Mode</vs-checkbox
        >
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import "material-icons/iconfont/material-icons.css";

export default {
  data: () => ({
    editMode: false
  }),
  methods: {
    toggleEdit() {
      this.$store.commit("change", this.editMode);
    }
  }
};
</script>

<style lang="stylus">
#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: dark;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>