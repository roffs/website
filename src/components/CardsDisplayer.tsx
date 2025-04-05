import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle.tsx";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";


type Tag = string;

type Post = {
    id: string;
    title: string;
    description: string;
    tags: Tag[]
}


type CardsDisplayerProps = {
    posts: Post[];
    tags: Tag[];
}

const CardsDisplayer = ({ posts, tags }: CardsDisplayerProps) => {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    const toggleTag = (tag: Tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const displayedPosts = selectedTags.length === 0 ? posts : posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)))

    return (
        <div>
            <div className={"mt-4 mb-12 flex gap-2"}>
                {tags.map((tag) => <Toggle key={tag} onClick={() => toggleTag(tag)} variant="outline" >{tag}</Toggle>)}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">


                {displayedPosts.map((post) => {
                    const { title, description, tags, id } = post;
                    return (
                        <Card className="w-[350px]" key={id}>
                            <CardHeader>
                                <CardTitle>
                                    <a href={`/digital-garden/${post.id}`}>{title}</a>
                                </CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default CardsDisplayer;