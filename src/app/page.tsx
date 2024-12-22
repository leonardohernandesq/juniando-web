import Card from "@/components/card";

export default function Home() {
  return (
    <div className="max-w-5xl m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <Card
        author="Lucas Lima"
        date={new Date()}
        title="Por onde começar a estudar programação?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
      />
      <Card
        author="Lucas Lima"
        date={new Date()}
        title="Por onde começar a estudar programação?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
      />
      <Card
        author="Lucas Lima"
        date={new Date()}
        title="Por onde começar a estudar programação?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
      />
      <Card
        author="Lucas Lima"
        date={new Date()}
        title="Por onde começar a estudar programação?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
      />
    </div>
  );
}
