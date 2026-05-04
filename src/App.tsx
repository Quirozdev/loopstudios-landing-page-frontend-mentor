import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation(["common"]);

  return (
    <Suspense>
      <div className="min-h-screen">
        <p className="text-preset-1 font-alata">{t("hello")}</p>
      </div>
    </Suspense>
  );
}

export default App;
