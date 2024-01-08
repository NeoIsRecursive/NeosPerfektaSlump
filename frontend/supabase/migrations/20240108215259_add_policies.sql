create policy "Enables all actions for the user that owns the group"
on "public"."groups"
as permissive
for all
to public
using ((owned_by = auth.uid()))
with check ((owned_by = auth.uid()));


create policy "Enable all actions for members for group owner"
on "public"."members"
as permissive
for all
to public
using ((auth.uid() IN ( SELECT groups.owned_by
   FROM groups)))
with check ((auth.uid() IN ( SELECT groups.owned_by
   FROM groups)));



