import Header from '@/app/components/header';
import Settings from '@/app/components/settings';
import Edit from '@/app/components/edit';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="basis-3/4 md:basis-full">
          <Edit />
        </div>
        <div className="settingBox basis-1/4 md:basis-none">
          <Settings />
        </div>
      </div>
    </div>
  );
}