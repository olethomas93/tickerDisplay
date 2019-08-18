<template>
  <div ref="tradingcontainer" id="trading-container">
    <Settings
      :symbols="tradingViewConfig.symbols"
      @update="updateTape"
    ></Settings>
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"></div>
  </div>
</template>

<script>
import Settings from "./tradingSettings";

export default {
  name: "TradingView",
  components: { Settings },
  mounted() {
    this.createTape();
  },
  data() {
    return {
      tradingViewConfig: {
        symbols: [
          {
            title: "S&P 500",
            proName: "NASDAQ:AAPL"
          },
          {
            title: "GOLD",
            proName: "TVC:GOLD"
          },
          {
            title: "EUR/USD",
            proName: "FX_IDC:EURUSD"
          },
          {
            title: "BTC/USD",
            proName: "BITSTAMP:BTCUSD"
          },
          {
            title: "ETH/USD",
            proName: "BITSTAMP:ETHUSD"
          }
        ],
        colorTheme: "dark",
        isTransparent: true,
        displayMode: "adaptive",
        locale: "en"
      }
    };
  },
  methods: {
    createTape() {
      var script = document.createElement("script");

      script.id = "tradingView";
      script.type = "text/javascript";
      script.async = true;

      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

      script.innerHTML = JSON.stringify(this.tradingViewConfig);

      document.body.appendChild(script);
      this.$refs.tradingcontainer.appendChild(script);
    },
    updateTape() {
      this.createTape();
      let nodes = this.$refs.tradingcontainer.childNodes;
      this.$refs.tradingcontainer.removeChild(nodes[nodes.length - 2]);
    }
  }
};
</script>

<style scoped>
#trading-container {
  position: absolute;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  transform: scale(1.3);
}
</style>

