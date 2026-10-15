# Compliance and Inspection Case Management

Source for the police-owned Fluent application `x_au_nswp_cicsm`. Its
Compliance and inspection case table extends the shared Operational case table
in `x_au_nswp_pcm`. The CPOR 16D leaf table stores the application fields on
that same Task record.

The Employee Center record producer is defined as Active and Published. It has
two-column sections, native Save as Draft, client validation and server
validation. It has no user criteria. Its catalog association is intentionally
left for the police development instance administrator. The producer verifies
active referenced users and department, resolves the selected Manager's HR
Profile, and uses SAP HDA Position when present, otherwise SAP Position. It
records the position at submission; officers do not enter it.

The backend application menu exposes compliance cases, CPOR cases and case
activities to the shared case worker role. The CPOR case list has a “New CPOR
application” action that opens the native producer. Staff should create an
application through that action rather than create an incomplete Task record.

This branch is **not ready for installation or operational use**. The Core
service remains inactive; no first Manager activity, live position handover,
reviewer action, standard ticket configuration or workspace queue has been
implemented here. Cross-scope access and the Employee Center journey require
review on the police development instance. A local build only validates SDK
source; it does not establish native behavior.

Install Core before this app when the first visual journey is complete. Do not
merge or install this branch solely to inspect its current producer.
