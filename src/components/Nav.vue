<template>
  <b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand to="home">Home</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item to="/register">Register</b-nav-item>
      <b-nav-item to="/login">Login</b-nav-item>
      <b-nav-item to="/Usermanage">list</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav> -->

  </b-collapse>
</b-navbar>

</template>
