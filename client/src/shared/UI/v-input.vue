<template>
  <input type="text" :name="name" :id="id" />
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
  },
}
</script>
