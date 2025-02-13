import {useEffect, useState} from "react";
import {Toggle} from "@/components/ui/toggle.tsx";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";


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

const CardsDisplayer = ({posts, tags}: CardsDisplayerProps) => {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

    const toggleTag = (tag: Tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag))));
        }
    }, [selectedTags]);

    return (
        <div>
            <div className={"my-4 flex gap-2"}>
                {tags.map((tag) => <Toggle key={tag} onClick={() => toggleTag(tag)} variant="outline" >{tag}</Toggle>)}
            </div>
            {filteredPosts.map((post) => {
                const {title, description, tags, id} = post;
                return (
                    <Card key={id}>
                        <CardHeader>
                            <CardTitle>
                                <a  href={`/digital-garden/${post.id}`}>{title}</a>
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
    )
}

export default CardsDisplayer;