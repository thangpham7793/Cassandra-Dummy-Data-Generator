CREATE TABLE ob3.marked_component_by_user_id (
    user_id TEXT,
    paper_id TEXT,
    doc_id TEXT,
    bookmarked map<text, text>,
    favorite map<text, text>,
    annotated map<text, text>,
    PRIMARY KEY ((user_id, paper_id), doc_id));