function coinChange(coins: number[], amount: number): number {
  // const choose = []
  const choose = new Map()
  function dp(n: number): [number, number[]] {
    if (choose.has(n)) {
      return choose.get(n)
    }
    if (n === 0) return [0, []]
    // if (n < 0) return -1
    const avliableCoins = coins.filter((c) => c <= n)
    let min = amount + 1
    let bestComb = []
    if (avliableCoins.length <= 0) {
      return [min, bestComb]
    }
    for (let c of avliableCoins) {
      // const internals = avliableCoins.map(c => dp(n - c))
      // const min = Math.min(...internal) + 1
      const [coin, comb] = dp(n - c)
      if (coin + 1 < min) {
        min = coin + 1
        bestComb = comb.concat(c)
      }
    }
    // console.log(n, internal, min)
    choose.set(n, [min, bestComb])
    return [min, bestComb]
    // }
  }
  const v = dp(amount)
  console.log(v[1])
  return v[0] >= amount + 1 ? -1 : v[0]
}

let coins = [1,2,5], amount = 100
console.log(coinChange(coins, amount))