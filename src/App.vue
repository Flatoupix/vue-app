<template>
  <v-app>
    <logo class="mx-auto mt-10"></logo>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-combobox
            placeholder="Tapez votre recherche ici"
            :items="namesNgroups"
            v-model="fltrdUsrs"
            clearable
          ></v-combobox>
        </v-col>
        <v-col cols="5"> </v-col>
        <v-col cols="3">
          <v-switch :ripple="false" inset v-model="cardMod" label="Mode carte"></v-switch>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <!-- <transition-group name="list" tag="div"> -->
        <user
          v-for="user in users"
          :cardMod="cardMod"
          v-show="
            fltrdUsrs == null ||
              fltrdUsrs.length == 0 ||
              fltrdUsrs.includes(user.FirstName + ' ' + user.LastName) ||
              fltrdUsrs.includes(user.UserHotcom.Group.Name)
          "
          :key="user.id"
          :User="user"
          :size="localSize"
        >
        </user>
        <!-- </transition-group> -->
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import logo from './components/logo'
import user from './components/user'
import datas from './assets/localDatas.json'

export default {
  components: {
    logo,
    user,
  },
  data() {
    return {
      users: datas,
      usersNames: [],
      usersGroups: [],
      namesNgroups: [],
      fltrdUsrs: null,
      localSize: 300,
      cardMod: false,
    }
  },
  watch: {
    users() {},
  },
  mounted() {
    this.users.forEach(user => {
      this.usersNames.push(user.FirstName + ' ' + user.LastName)
      if (!this.usersGroups.includes(user.UserHotcom.Group.Name)) {
        this.usersGroups.push(user.UserHotcom.Group.Name)
      }
    })
    this.namesNgroups = this.usersNames.concat(this.usersGroups)
    // this.$http
    //   .get('https://ww2.eudonet.com/SPECIF/EUDO_HOTCOM_EUDOWEB/root/hotcom/Trombinoscope')
    //   .then(response => (this.users = response.data))
  },
}
</script>
<style lang="stylus">
div.v-input--is-label-active
  label.v-label.theme--light
    font-weight bold
    color var(--v-primary-base)
</style>