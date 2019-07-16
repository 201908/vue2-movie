<template>
  <div class="home">
    <x-header :left-options="{showBack: false}">我看过的电影</x-header>
    <search
      v-model="filterInput"
      position="fixed"
      auto-scroll-to-top
      top="0px"
      @on-submit="onSubmit"
      ref="search"
    ></search>
    <ViewBox>
      <panel :list="filterBy(list,filterInput)" :type="type" @on-click-item="onItemClick"></panel>
    </ViewBox>
  </div>
</template>

<script>
import { Panel, ViewBox, Search } from "vux";

export default {
  name: "home",
  components: {
    Panel,
    ViewBox,
    Search
  },
  data() {
    return {
      type: "2",
      list: [],
      results: [],
      filterInput: ""
    };
  },
  methods: {
    filterBy(list, value) {
      return list.filter(customer => {
        return customer.title.match(value);
      });
    },
    onItemClick(item) {
      // console.log(item)
      this.$router.push({ path: "/edit/" + item.id });
    },
    fetchMovies() {
      this.$http
        .get("/movie.json")
        .then(response => {
          return response.data;
        })
        .then(response => {
          // console.log(response)
          var blogsArray = [];
          for (let key in response) {
            //console.log(response[key])
            response[key].id = key;
            blogsArray.push(response[key]);
          }
          this.list = blogsArray.reverse();
        });
    },
    onSubmit() {
      this.$refs.search.setBlur();
    }
  },
  created() {
    this.fetchMovies();
    console.log(this.list);
  }
};
</script>
