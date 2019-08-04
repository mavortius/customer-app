<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Customer List App</h1>
      <div v-if="customers.length === 0">
        <h2>No customer found at the moment</h2>
      </div>
    </div>

    <div v-if="customers.length">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customers" :key="customer._id">
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.description }}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px;">
                <router-link :to="{name: 'edit-customer', params: {id: customer._id}}" class="btn btn-sm btn-outline-secondary">Edit Customer </router-link>
                <button class="btn btn-sm btn-outline-danger" @click="deleteCustomer(customer._id)">Delete Customer</button>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import { Customer } from '@/types/customer';
  import { api } from '@/helper';

  @Component
  export default class Home extends Vue {
    public customers: Customer[] = [];

    public created() {
      this.fetchCustomers();
    }

    public deleteCustomer(id: number) {
      axios.delete(`${api.baseURL}/customers/${id}`)
        .then(() => window.location.reload());
    }

    private fetchCustomers() {
      axios.get(`${api.baseURL}/customers`)
        .then((response) => this.customers = response.data);
    }
  }
</script>
