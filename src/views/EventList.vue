<template>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => (this.events = response.data))
      .catch((error) => console.log('error =', error))
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
