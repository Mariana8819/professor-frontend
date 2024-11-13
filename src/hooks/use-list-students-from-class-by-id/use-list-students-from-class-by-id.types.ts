export interface UseListStudentsFromClassByIdProps {
  classId: string;
}

export interface UseListStudentsFromClassByIdResult {
  name: string;
  id: string;
  status: string;
  classCode: string; 
}

export type UseListStudentsFromClassByIdHook = (
  params: UseListStudentsFromClassByIdProps,
) => UseListStudentsFromClassByIdResult;
