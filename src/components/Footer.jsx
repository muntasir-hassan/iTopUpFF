function Footer() {
  return (
    <footer className="bg-[#222] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 max-w-sm ">
          <p>সকাল ৮:০০ থেকে রাত ১১:৩০ পর্যন্ত অর্ডার নেয়া হয়।</p>
          <p>
            সাধারণত ১-২০ মিনিটের ভিতরে Order Complete করা হয়। সর্বোচ্চ সময় ১
            ঘন্টা।
          </p>
          <p>Diamond না পেলে ৩ দিনের ভিতরে জানাতে হবে।</p>
        </div>

        {/* Center Section */}
        <div className="mb-4 md:mb-0">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-2">
          {/* Social Media Buttons */}
          <div className="flex space-x-2">
            <a
              href="#"
              className="bg-blue-600 text-white px-3 py-1 rounded flex items-center space-x-2"
            >
              <box-icon type="logo" name="youtube" color="white"></box-icon>{" "}
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="bg-red-600 text-white px-3 py-1 rounded flex items-center space-x-2"
            >
              <box-icon type="logo" name="youtube" color="white"></box-icon>
              <span>YouTube</span>
            </a>
          </div>

          {/* Google Play Button */}
          <a href="#" className="mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              className="w-40"
            />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm">© 2021-2024 itopupff.com</div>
    </footer>
  );
}

export default Footer;
