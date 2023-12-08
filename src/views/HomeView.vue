<!-- <template>
  <main>
    <h1>欢迎来到 Vue2 世界.</h1>
    <hr />
    <small>{{ pageTitle }}</small>
    <h2 class="display-1" ref="lblCounter">{{ counterData.count }}</h2>
    <h6 class="text-primary fw-bold">{{ odd_even }}</h6>
    <button class="btn btn-success mx-1" @click="modifyCounter(1)">
      加1个
    </button>
    <button class="btn btn-danger mx-1" @click="modifyCounter(-1)">
      减1个
    </button>
  </main>
</template>

<script>
import { ref } from "vue";
import useCounter from "@/use/useCounter";

export default {
  components :{
    useCounter,
  },
  data() {
    return {
      pageTitle: "我的计数器",
      lblCounter: null,
      ...useCounter(),
    };
  },
};
</script> -->
