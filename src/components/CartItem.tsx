import { Button, Stack } from "react-bootstrap";
import { useSoppingCart } from "../context/ShoppingCartContext";
import StoreItem from "../data/items.json";
import { formatCurrency } from "../utilites/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useSoppingCart();
  const item = StoreItem.find((i) => i.id == id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={3}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />

      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className=" text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        &times;
      </Button>
    </Stack>
  );
}
