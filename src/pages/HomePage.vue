<template>
      <!-- NOTE below is my inputs -->
    <div class="container">
      <section class="row">
        <form class="form-control" @submit.prevent="create" action="">
          <div class="m-2">
            <label for="title">Title:</label>
            <input name="title" type="text" id="title" placeholder="title goes here" v-model="editable.title">
          </div>
          <div class="m-2">
            <label for="text">Text:</label>
            <input name="text" type="text" id="text" placeholder="what is the note?" v-model="editable.text">
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </section>
      <section class="row">
        <div v-for="note in notes" class="card col-4">
          <h3>{{note.title}}</h3>
          <p>{{note.text}}</p>
          <!-- {{notes}} -->
        </div>
      </section>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      notes: computed(()=> AppState.notes),
      create(){
        debugger
        notesService.create(editable.value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

