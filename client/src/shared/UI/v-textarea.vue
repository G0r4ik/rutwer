<template>
  <textarea class="form-control" :id="id" :rows="rows"></textarea>
</template>
<script>
export default {
  props: {
    id: String,
    rows: Number,
  },
}
</script>
