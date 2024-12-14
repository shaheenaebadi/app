import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Construction } from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="text-center">
            <Construction className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Content Coming Soon
            </h1>
            <div className="text-4xl mb-4">
              🚧 🚧 🚧
            </div>
            <p className="text-gray-600">
              We're working hard to bring you new content. Please check back later.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenancePage;