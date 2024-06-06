export default () => {
    return (
      <footer class="bg-white rounded-lg shadow">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <img
              src="https://img.icons8.com/?size=512&id=NO8It5EgLtpM&format=png"
              class="h-8 mr-3"
              alt="Medium"
            />
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="/" class="hover:underline">
              Medium
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  };