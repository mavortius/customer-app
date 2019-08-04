<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" @click="navigate()"> View All Customers</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2> Edit Customer </h2>
      <form id="create-post-form" @submit.prevent="editCustomer">
        <div class="form-group col-md-12">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" v-model="customer.firstName" name="first-name" class="form-control"
                 placeholder="First Name">
        </div>
        <div class="form-group col-md-12">
          <label for="last-name"> Last Name </label>
          <input type="text" id="last-name" v-model="customer.lastName" name="last-name" class="form-control"
                 placeholder="Enter Last name">
        </div>
        <div class="form-group col-md-12">
          <label for="email">Email</label>
          <input type="text" id="email" v-model="customer.email" name="email" class="form-control"
                 placeholder="Enter email">
        </div>
        <div class="form-group col-md-12">
          <label for="phone">Phone</label>
          <input type="text" id="phone" v-model="customer.phone" name="phone" class="form-control"
                 placeholder="Enter Phone number">
        </div>
        <div class="form-group col-md-12">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="customer.address" name="address" class="form-control"
                 placeholder="Enter Address">
        </div>
        <div class="form-group col-md-12">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="customer.description" name="description" class="form-control"
                 placeholder="Enter Description">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit Customer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import { api } from '@/helper';
  import { Customer } from '@/types/customer';
  import router from '@/router';

  @Component
  export default class EditCustomer extends Vue {
    public customer: Customer = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      description: '',
    };
    private id: string = '';

    public created() {
      this.id = this.$route.params.id;
      this.getCustomer();
    }

    public editCustomer() {
      axios.put(`${api.baseURL}/customers/${this.id}`, this.customer)
        .then(() => router.push({name: 'home'}));
    }

    public navigate() {
      router.go(-1);
    }

    private getCustomer() {
      axios.get(`${api.baseURL}/customers/${this.id}`)
        .then((response) => this.customer = response.data);
    }
  }
</script>
