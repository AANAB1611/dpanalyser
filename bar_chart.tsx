import { format } from "date-fns";
import {
  BarChart,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";

import { CustomTooltip } from "./custom-tooltip";

const BarVariant = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(new Date(value), "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="commits" fill="#3b82f6" className="drop-shadow-sm" />
        <Bar dataKey="merges" fill="#f43f5e" className="drop-shadow-sm" />
        <Bar dataKey="repoEngagement" fill="#10b981" className="drop-shadow-sm" />
        <Bar dataKey="requestedChanges" fill="#f59e0b" className="drop-shadow-sm" />
        <Bar dataKey="bugsFixed" fill="#8b5cf6" className="drop-shadow-sm" />
        <Bar dataKey="issuesSolved" fill="#ec4899" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarVariant;
