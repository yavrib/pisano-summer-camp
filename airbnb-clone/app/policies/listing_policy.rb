class ListingPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope#.where(record.user_id = user.id) see documentation
    end
  end
  def destroy?
    record.user_id == user.id
    #true
  end
  def update?
    record.user_id == user.id
  end
end
