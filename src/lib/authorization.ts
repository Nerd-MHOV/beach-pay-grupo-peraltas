

export const canAccessPage = ({ role, page }: { role: string; page: string }) => {
  if (PublicPages.includes(page)) return true;
  if (role === "admin" && match(AdminPages, page)) return true;
  if (role === "operational" && match(OperationalPages, page)) return true;
  if (role === "teacher" && match(TeacherPages, page)) return true;
  return false;
}

export const PublicPages = [
  "/",
  "/login",
  "/not-permitted",
]

const AdminPages = [
  "/panel",
  "/panel/*",
  "/teacher",
  "/teacher/*",
]

const OperationalPages = [
  "/panel",
  "/panel/athletes",
  "/panel/athletes/*",
  "/panel/investments",
  "/panel/investments/*",
  "/panel/investments",
  "/panel/tournaments",
  "/panel/tournaments/*",
  "/panel/arenas",
]

const TeacherPages = [
  "/teacher",
  "/teacher/*",
]


function patternToRegex(pattern: string): RegExp {
  const escaped = pattern.replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&');
  const regexPattern = "^" + escaped.replace(/\*/g, ".*") + "$";
  return new RegExp(regexPattern);
}

function match(permittedPages: string[], page: string): boolean {
  return permittedPages.some((pattern) => {
    const regex = patternToRegex(pattern);
    return regex.test(page);
  });
}