<template>
  <div class="well" :style="styles.well">
    <div class="row" :style="styles.row">
      <div :class="styles.titleDivClass">
        <span :style="styles.title">{{ title }}</span>
      </div>
      <div :class="styles.buttonDivClass">
        <div class="btn-group btn-group-justified">
          <div v-for="button in buttons" class="btn-group">
            <button :style="styles.button" class="btn btn-lg btn-default" v-on:click="performAction(button.action, button.target)" :action="button.action">
              <icon :name="button.icon"></icon>
              <span class="button-message hidden-xs hidden-sm">{{ button.message }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      buttons: {
        type: Array,
        required: true
      },
      styles: {
        type: Object,
        required: true
      }
    },
    methods: {
      performAction: function (actionTrigger, actionTarget) {
        this.$emit(actionTrigger, actionTarget)
      }
    }
  }
</script>

<style scoped>
  .button-message {
    padding-left: 4%;
  }
  .fa-icon {
    vertical-align: -10%
  }
  @media (max-width: 767px) {
    .well {
      margin: 10px;
      padding: 0px;
      border: none;
      border-radius: 0px;
      box-shadow: none
    }
  }
</style>
