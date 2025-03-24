import React from "react";

function SkillsSection() {
  return (
    <section className="bg-custom-yellow py-4 px-6 sm:py-6 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray text-center text-sm sm:text-lg font-semibold tracking-wide">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl sm:text-3xl font-bold">*</span>
          <span>App Design</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl sm:text-3xl font-bold">*</span>
          <span>Website Design and Development</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl sm:text-3xl font-bold">*</span>
          <span>UI/UX Design</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl sm:text-3xl font-bold">*</span>
          <span>Frontend Development</span>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
