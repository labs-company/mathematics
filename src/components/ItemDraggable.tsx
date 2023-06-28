type propsItemDraggble = { item: string };

export function ItemDraggable(props: propsItemDraggble) {
  return (
    <img
      className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
      src={props.item}
      alt="item play"
    />
  );
}
