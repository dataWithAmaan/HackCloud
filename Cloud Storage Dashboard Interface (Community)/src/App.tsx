import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { StorageCards } from './components/StorageCards';
import { QuickAccess } from './components/QuickAccess';
import { FilesTable } from './components/FilesTable';
import { ActivityPanel } from './components/ActivityPanel';

export default function App() {
  return (
    <div className="flex h-screen bg-[#F7F9FC] overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <StorageCards />
          <QuickAccess />
          <FilesTable />
        </main>
      </div>
      
      {/* Right Activity Panel */}
      <ActivityPanel />
    </div>
  );
}
