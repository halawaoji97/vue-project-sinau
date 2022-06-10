<template>
  <div class="container my-5 shadow-lg">
    <div class="modal-dialog-content">
      <div class="modal-dialog-header">
        <h4>Tambah Pengguna</h4>
      </div>
      <div class="py-4">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name"
              v-model="params.name"
              required
            />
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="email" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="email"
              v-model="params.email"
              required
            />
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="gender" class="form-label">Gender</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                v-model="params.gender"
                value="male"
                required
              />
              <label class="form-check-label" for="male"> Male </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                v-model="params.gender"
                required
              />
              <label class="form-check-label" for="female"> Female </label>
            </div>
          </div>
          <div class="mb-3 d-flex flex-column align-items-start">
            <label for="status" class="form-label">Status</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="active"
                value="active"
                v-model="params.status"
                required
              />
              <label class="form-check-label" for="active">Active</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="status"
                id="inActive"
                value="inactive"
                v-model="params.status"
                required
              />
              <label class="form-check-label" for="inActive">Inactive</label>
            </div>
          </div>
          <div class="d-flex justify-content-around my-4">
            <button type="button" class="btn btn-secondary w-25" @click="back">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary w-25">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const initialState = {
      name: '',
      email: '',
      gender: '',
      status: '',
    };

    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const params = reactive({ ...initialState });
    const routeParams = computed(() => route.params || {});
    const hasId = computed(() => !!routeParams.value.id);

    const initPage = () => {
      Object.assign(params, routeParams.value);
    };

    const handleSubmit = () => {
      if (hasId.value) {
        const data = { ...params, id: routeParams.value.id };
        store.dispatch('user/updateUser', data).then(() => {
          router.back();
        });
      } else {
        const data = { ...params };
        store.dispatch('user/insertUser', data).then(() => {
          router.push('/');
        });
      }
    };
    const back = () => {
      router.replace('/');
    };

    onMounted(() => {
      initPage();
    });

    return { handleSubmit, params, back };
  },
});
</script>
