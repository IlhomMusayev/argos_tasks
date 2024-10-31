import Compensation from "@/components/sections/compensation";
import Navbar from "@/components/sections/navbar";
import PersonalFeatures from "@/components/sections/personal-features";
import PsychologySection from "@/components/sections/psychology-section";
import SmartTest from "@/components/sections/smart-test";
import UserInfo from "@/components/sections/user-info";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <UserInfo
        name="Шарипов Азамат"
        title="Абдуллажон ўғли"
        birthDate="30.09.1997"
        birthPlace="Чуст ш., Наманган"
        height={180}
        weight={70}
        bmi={22.5}
        currentPosition="Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик вазири уринбосари"
        previousPosition="Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик вазири"
        imageUrl="/_static/avatars/man.png"
      />
      <SmartTest />
      <PersonalFeatures />
      <PsychologySection />
      <Compensation />
    </>
  );
}
