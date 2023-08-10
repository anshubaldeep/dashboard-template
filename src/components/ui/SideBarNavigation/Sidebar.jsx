import { Children, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { pathMapper } from "../../helper";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import AlertDialog from "../AlertDialog";
import { BASE_URL } from "@/lib/baseUrl";

const SidebarNavigation = () => {
  const paths = useMemo(() => pathMapper(), []);
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-4 overflow-y-auto dark:bg-gray-900 bg-gray-500">
          <ul className="space-y-2 text-sm mt-16">
            {Children.toArray(
              paths
                .filter((s) => s.showInSidebar)
                .map((path) => (
                  <li>
                    <NavLink
                      to={path.url}
                      className={cn(
                        "flex flex-col items-center p-2 text-gray-900 rounded-lg text-white dark:text-white ",
                        "hover:bg-gray-700",
                        "aria-[current=page]:bg-gray-600 aria-[current=page]:text-white aria-[current=page]:hover:bg-gray-700"
                      )}
                    >
                      <span className="mb-2 text-sm">{path.icon}</span>
                      <span className="text-xs">{path.displayName}</span>
                    </NavLink>
                  </li>
                ))
            )}
          </ul>
          <div>
            <AlertDialog
              title="Logout"
              description="Are you sure you want to logout?"
              confirmLabel="Logout"
              closeLabel="Cancel"
              onConfirm={() =>
                window.open(
                  `${BASE_URL}/api/logout?continue=${window.location.href}`,
                  "_self"
                )
              }
              Trigger={
                <div
                  className={cn(
                    "flex flex-col items-center p-2 rounded-lg text-white dark:text-white absolute bottom-4",
                    "hover:bg-gray-700",
                    "cursor-pointer"
                  )}
                  onClick={() => {}}
                >
                  <span className="mb-2 text-sm">
                    <LogOut size={16} />
                  </span>
                  <span className="text-xs">Logout</span>
                </div>
              }
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarNavigation;
