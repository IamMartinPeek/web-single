import './styles/style.scss';
import activateContactFormValidators from './about/about';
import setListener from './contents/contents';

window.addEventListener('load', () => {
    if (document.getElementById('navigation') != null) {
        const nav = document.getElementById('navigation');
        nav.innerHTML = `
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="flex-1 flex items-center justify-center">
                <div class="sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="index.html"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
    
                    <a href="contents.html"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contents</a>
    
                    <a href="about.html"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>`;
    }
});

if (document.getElementById('about-page') != null) {
  activateContactFormValidators();
}

if (document.getElementById('contents-page') != null) {
  setListener();
}