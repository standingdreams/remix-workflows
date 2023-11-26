interface Props {
  item: { id: string; name: string; slug: string } | null;
  showCurrent?: boolean;
}
export default function TenantBadge({ item, showCurrent }: Props) {
  return <div>{item ? <span className="text-gray-700">{item.name}</span> : <span className="text-gray-500 italic">- Admin -</span>}</div>;
}
