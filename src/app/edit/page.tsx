import Header from '@/app/components/header';
import Settings from '@/app/components/settings';
import Editor from '@/app/components/edit';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div className="flex-auto">
          <Editor />
        </div>
        <div className="flex-auto">
          <Settings />
        </div>
      </div>
    </div>
  );
}