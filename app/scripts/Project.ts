import { createClient } from "@supabase/supabase-js";
import { cookies } from 'next/headers';

export default class Project {
    public name: string = "DEFAULT_NAME";
    public subTitle: string = "DEFAULT_SUBTITLE";
    public description: string = "DEFAULT_DESCRIPTION";
    public linkToCode: string = "DEFAULT_CODE_LINK";
    public linkToProject: string = "DEFAULT_PROJECT_LINK";
    public tags: string[] = []
    public images: string[] = []

    public async AccessDatabaseByName(name: string) {
        const cookieStore = cookies()
        const supabase = createClient(cookieStore);
        const { data: notes } = await supabase.from("notes").select()
    }
}