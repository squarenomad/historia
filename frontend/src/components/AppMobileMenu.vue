<template>
  <div v-if="openMobileMenu" class="container-fluid">
    <div class="row">
      <div class="mobile-menu">
        <a v-on:click="closeMobileMenu">&times;</a>
        <child-menu :pages="pages" :footer="footer"></child-menu>
      </div>
    </div>
  </div>
</template>

<script>
  import ChildAppMenu from './ChildMainMenu.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      ChildMenu: ChildAppMenu
    },
    props: {
      pages: {
        type: Array,
        required: true
      },
      footer: {
        type: Array,
        required: true
      }
    },
    methods: {
      closeMobileMenu: function () {
        this.$store.dispatch('closeMobileMenu')
      }
    },
    computed: {
      ...mapState({
        openMobileMenu: 'mobileMenuIsOpen'
      })
    },
    watch: {
      openMobileMenu: function (state) {
        if (state) {
          document.getElementsByTagName('body')[0].classList.add('stop-scrolling')
        } else {
          document.getElementsByTagName('body')[0].classList.remove('stop-scrolling')
        }
      }
    }
  }
</script>

<style scoped>
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: rgba(214, 214, 214, 0.9);
    border-right: 1px solid #eee;
    padding-top: 20px;
  }
  .mobile-menu > a {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
</style>
