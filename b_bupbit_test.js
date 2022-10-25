const Upbit = require('./b_upbit_lib')

async function start() {
    const upbit = new Upbit('secret-key', 'access-key')

    console.log('-- market_all -------------------------------------------------')
    let json = await upbit.market_all()
    console.log(json.data)

    {
        console.log('-- market_minute -------------------------------------------------')
        let {'success':success, 'message':message, 'data':data, 'remain_min':remain_min, 'remain_sec':remain_sec} = await upbit.market_minute('KRW-BTC', 1, '', 2)
        console.log('remain_sec:',remain_sec)
        console.log('remain_min:',remain_min)
        console.log(data)
    }

    {
        console.log('-- order_chance -------------------------------------------------')
        let {'data':data} = await upbit.order_chance('KRW-BTC')
        console.log(data)
    }

}

start()