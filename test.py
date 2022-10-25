import pyupbit


print(pyupbit.get_tickers(fiat="KRW"))
print(pyupbit.get_current_price(["KRW-BTC", "KRW-XRP"]))