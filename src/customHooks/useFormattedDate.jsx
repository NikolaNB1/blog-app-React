import { useEffect, useState } from "react";
import { format } from "date-fns";

const useFormattedDate = (dateString, outputFormat = "yyyy-MM-dd HH:mm:ss") => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate.getTime())) {
      const formatted = format(parsedDate, outputFormat);
      setFormattedDate(formatted);
    }
  }, [dateString, outputFormat]);

  return formattedDate;
};

export default useFormattedDate;
