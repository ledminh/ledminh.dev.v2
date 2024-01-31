type Props = {
  detailHTML: string;
};

export default function Detail({ detailHTML }: Props) {
  return (
    <div className="text-lg flex flex-col gap-2 p-2">
      <h3 className="border-b-2 border-gray-300">DETAIL</h3>
      <div
        className="project-detail"
        dangerouslySetInnerHTML={{ __html: detailHTML }}
      />
    </div>
  );
}
