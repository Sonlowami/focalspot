import React, { useState } from 'react';
import { Upload, ChevronDown, Github, Linkedin } from 'lucide-react';

type Model = {
  id: string;
  name: string;
  description: string;
  type: string;
};

function App() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const models: Model[] = [
    {
      id: 'chest-xray',
      name: 'Chest X-Ray Classifier',
      description: 'Diagnose common chest conditions from X-ray images',
      type: 'image',
    },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPrediction(null);
    }
  };

  const handleModelSubmit = async () => {
    setPrediction("Sample prediction - This would be replaced with actual model output");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}>
          </div>
        </div>
        
        <div className="relative pt-24 pb-48 sm:pt-32 sm:pb-56 lg:pb-64 xl:pb-80">
          {/* Content Container */}
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
                  <div className="absolute inset-0 rounded-full bg-indigo-600 blur-3xl opacity-30 animate-pulse"></div>
                  <img
                    src="/me1.jpg"
                    alt="Lowami Uwimana"
                    className="relative rounded-full w-full h-full object-cover border-8 border-indigo-600/20 shadow-2xl"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                  <span className="block">Lowami</span>
                  <span className="block mt-2">Uwimana</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-indigo-100 max-w-2xl mx-auto lg:mx-0">
                  Advancing healthcare through innovative AI solutions in medical imaging
                </p>
                <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                  <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                    <Github className="w-7 h-7" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/uwimana-lowami-b4a19b157/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-indigo-200 transition-colors"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f8fafc"
              fillOpacity="1"
              d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,224C560,245,640,267,720,250.7C800,235,880,181,960,165.3C1040,149,1120,171,1200,176C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 -mt-20">
      <h2 className="text-3xl font-bold mb-6 mt-4 text-gray-900">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <p className="text-gray-700">
                I am a software engineer passionate about advancing the application of AI in medical imaging. Currently working part-time at Emodocar managing backend systems and cloud resources, while dedicating most of my time to developing cutting-edge AI projects in healthcare.
              </p>
              <p className="text-gray-700">
                With a background in Medical Imaging Sciences from the University of Rwanda and extensive experience in back-end programming, I bring a unique perspective to the intersection of technology and medicine. My work is driven by curiosity and a commitment to creating innovative solutions that can transform diagnosis, treatment, and medical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Try the Models</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Model Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select a Model
            </label>
            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={selectedModel || ''}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option value="">Choose a model...</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {selectedModel && (
            <div className="space-y-6">
              {/* File Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="h-12 w-12 text-gray-400 mb-3" />
                  <span className="text-gray-600">
                    {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleModelSubmit}
                disabled={!selectedFile}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Analyze
              </button>

              {/* Results */}
              {prediction && (
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Results</h3>
                  <p className="text-gray-700">{prediction}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>© 2024 Uwimana Lowami. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;