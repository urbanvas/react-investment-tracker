class User < ApplicationRecord
    has_secure_password
    has_many :investments

    def user_serializer
        {
            username: username,
            email: email,
            id: id
        }
    end

end
