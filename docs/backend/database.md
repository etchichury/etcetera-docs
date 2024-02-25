# Database

Not much is happening here. It's been a long time since I created and handled a database.
For now this is a simples PostgreSQL database instance. I don't remember much about what the best practices are but I'll try to, at least, be consistent.

## Model

This modeling can, and probably will, change a long the way as I'm working with it.

![Etcetera database model](../assets/database_model.png)

:::note

Tha naming convention is to use snake case and singular for table names. It seems that `user_settings` is not following this, but it is. This table is a **set** of settings not a table of settings, where each row is one specific setting. I could define it as `user_settings_set` but I don't think it's necessary. And it doesn't sound good either.

:::