<template>
  <v-card :class="['mx-auto', cardMod ? 'my-2' : 'ma-3']" :width="cardMod ? '344' : 'auto'" outlined>
    <v-list-item three-line v-show="cardMod">
      <v-list-item-content>
        <v-list-item-title color="white" class="headline mb-1">{{ User.UserHotcom.Name }}</v-list-item-title>
        <v-list-item-subtitle>{{ User.UserHotcom.Group.Name }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80">
        <v-img :src="User.PhotoUrl" alt="">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-avatar loading v-show="!cardMod" tile size="160" @click="openPhoto()">
      <v-img :src="User.PhotoUrl" alt="">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-avatar>
    <v-dialog v-model="dialog" :max-width="dialogSize">
      <v-card class="mx-auto" max-width="auto" tile color="#bb1515">
        <v-row align="end">
          <v-col cols="7" align-self="end" class="pa-0">
            <v-avatar size="350" max-width="300" tile>
              <v-img :src="User.PhotoUrl"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="5" class="pl-0 ml-0 brdBtt">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content color="#000">
                <v-list-item-title class="title">{{ User.UserHotcom.Name }}</v-list-item-title>
                <v-list-item-subtitle>{{ User.UserHotcom.Group.Name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item dark color="red" v-if="User.Email">
              <v-icon class="mr-1">mdi-mail</v-icon>
              {{ User.Email }}
            </v-list-item>
            <v-list-item dark v-if="User.Tel">
              <v-icon class="mr-1">mdi-phone</v-icon>
              {{ User.Tel }}
            </v-list-item>
            <v-list-item dark v-if="User.Portable">
              <v-icon class="mr-1">mdi-phone</v-icon>
              {{ User.Portable }}
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'User',
  props: {
    User: {
      type: Object,
      default: () => {},
    },
    size: {
      type: Number,
      default: () => 50,
    },
    dialogSize: {
      type: Number,
      default: () => 600,
    },
    cardMod: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      dialog: false,
      loading: true,
    }
  },
  methods: {
    openPhoto() {
      this.dialog = true
      //   window.open(this.User.photoUrl, '_blank')
    },
  },
}
</script>


<style lang="stylus">
div.v-dialog
  overflow hidden

  div.v-card
    background-image url('../assets/eudoLogo.svg')
    background-position-x 24em
    background-position-y 2em
</style>