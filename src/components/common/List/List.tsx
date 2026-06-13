import type { ListProps, ListItemProps, ListItemTextProps } from "./types";
import { StyledList, StyledListItem, StyledListItemText } from "./styles";

export function List(props: ListProps) {
    return <StyledList {...props} />;
}

export function ListItem(props: ListItemProps) {
    return <StyledListItem {...props} />;
}

export function ListItemText(props: ListItemTextProps) {
    return <StyledListItemText {...props} />;
}
