import { BASE_URL } from "../constants/url";
import useFetch from "./useFetch";

const TRADING_ORDER_URL = `${BASE_URL}/traddingOrder`
const ORDER_BY_USER_URL = `${BASE_URL}/shoppingOrder/order`;

function useOrder() {
  const { get_fetcher, post_fetcher } = useFetch();

  const create_trading_order = (body) => {
    const {
      deposits,
      items,
      accepter,
      requester,
      accepter_pet_id,
      requester_pet_id,
      fee_payer,
      price,
      code,
    } = body;

    const request_data = {
      "code": code,
      "requester": {
        "requester_id": requester,
        "pet_id": requester_pet_id,
        "items": items,
        "deposits": deposits
      },
      "accepter": {
        "accepter_id": accepter,
        "pet_id": accepter_pet_id,
        "deposits": deposits
      },
      "fee_payer": fee_payer,
      "price": price
    }

    post_fetcher(TRADING_ORDER_URL, request_data)
  }

  const get_order_by_user = async (id) => {
    const order = await get_fetcher(`${ORDER_BY_USER_URL}/${id}`)
      .then((res) => res)
      .catch((err) => alert(err));

    return order
  };


  return {
    get_order_by_user,
    create_trading_order
  };
}

export default useOrder;