import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default class Project {
    public id: number = 0
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
        const project = await supabase
        .from("Projects")
        .select()
        .single();

        this.id = project.data.id
        this.name = project.data.name
        this.subTitle = project.data.subtitle
        this.description = project.data.description
        this.linkToCode = project.data.linkToCode
        this.linkToProject = project.data.linkToProject

        const tags = await supabase
        .from("ProjectsTags")
        .select()
        .filter("projectID", "is", project.data.id);

        if (tags.count === null)
        {
            for (var i: number = 0; i < tags.count!; i++) 
            {
                const tag = await supabase
                .from("Tags")
                .select()
                .filter("id", "is", tags.data![i].tagID)
                .single();
                this.tags.push(tag.data.name)
            }
        }
        var num = (await supabase.storage.from('images').list(this.name + "/")).data!
        for (var i: number = 0; i < num.length; i++)
        {
            this.images.push(await supabase.storage.from('images').getPublicUrl(this.name + "/" + num[i].name).data.publicUrl)
        }
    }
}